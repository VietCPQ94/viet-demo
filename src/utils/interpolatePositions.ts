import { Data14, Message, ObjPos } from "@/types/log.type";

export default (dataArray: Message[]) => {
  const output: ObjPos[] = [];
  const interval = 100; // milliseconds

  if (dataArray.length === 0) return output;

  const startTime = dataArray[0].timestamp;
  const endTime = dataArray[dataArray.length - 1].timestamp;
  let currentTime = startTime;

  const dataPoints = dataArray.map((item) => ({
    timestamp: item.timestamp,
    position: {
      x: (item.data as Data14).pose.pose.position.x,
      y: (item.data as Data14).pose.pose.position.z, // ROS z to Three.js y
      z: -(item.data as Data14).pose.pose.position.y, // ROS y to Three.js z
    },
    rotation: {
      x: (item.data as Data14).pose.pose.orientation.x,
      y: (item.data as Data14).pose.pose.orientation.z, // ROS z to Three.js y
      z: (item.data as Data14).pose.pose.orientation.y, // ROS y to Three.js z
      w: (item.data as Data14).pose.pose.orientation.w,
    },
  }));

  while (currentTime <= endTime) {
    const lowerIndex = dataPoints.findIndex(
      (item) => item.timestamp >= currentTime
    );
    const upperIndex = lowerIndex > 0 ? lowerIndex : 0;

    if (
      lowerIndex === -1 ||
      (upperIndex === 0 && dataPoints[0].timestamp > currentTime)
    ) {
      currentTime += interval;
      continue;
    }

    const lowerPoint = dataPoints[upperIndex - 1] || dataPoints[0];
    const upperPoint = dataPoints[upperIndex];

    if (lowerPoint && upperPoint) {
      const timeDiff = upperPoint.timestamp - lowerPoint.timestamp;
      const ratio = (currentTime - lowerPoint.timestamp) / timeDiff;

      const interpolatedPosition = {
        x:
          lowerPoint.position.x +
          (upperPoint.position.x - lowerPoint.position.x) * ratio,
        y:
          lowerPoint.position.y +
          (upperPoint.position.y - lowerPoint.position.y) * ratio,
        z:
          lowerPoint.position.z +
          (upperPoint.position.z - lowerPoint.position.z) * ratio,
      };

      const interpolatedRotation = {
        x:
          lowerPoint.rotation.x +
          (upperPoint.rotation.x - lowerPoint.rotation.x) * ratio,
        y:
          lowerPoint.rotation.y +
          (upperPoint.rotation.y - lowerPoint.rotation.y) * ratio,
        z:
          lowerPoint.rotation.z +
          (upperPoint.rotation.z - lowerPoint.rotation.z) * ratio,
        w:
          lowerPoint.rotation.w +
          (upperPoint.rotation.w - lowerPoint.rotation.w) * ratio,
      };

      output.push({
        timestamp: currentTime,
        position: interpolatedPosition,
        rotation: interpolatedRotation,
      });
    }

    currentTime += interval;
  }

  return output;
};
