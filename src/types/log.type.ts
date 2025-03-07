export interface TLog {
  metadata: Metadata;
  topics: Topic[];
}

export interface Topic {
  topicName: string;
  topicType: string;
  frequency: null | number;
  messages: Message[];
}

interface Message {
  timestamp: number;
  data:
    | Datum
    | Data2
    | Data3
    | Data4
    | Data5
    | Data6
    | Data7
    | Data8
    | Data9
    | Data10
    | Data11
    | Data12
    | Data13
    | Data14
    | Data15
    | Data16
    | MapMetadata
    | Data18
    | string;
  compressed?: boolean;
}

interface Data18 {
  header: Header;
  poses: Data4[];
}

export interface Data16 {
  header: Header;
  level: number;
  name: string;
  msg: string;
  file: string;
  function: string;
  line: number;
  topics: string[];
}

interface Data15 {
  header: Header;
  pose: Pose2;
}

interface Data14 {
  header: Header;
  child_frame_id: string;
  pose: Pose2;
  twist: Twist;
}

interface Twist {
  twist: Data12;
  covariance: number[];
}

interface Pose2 {
  pose: Pose;
  covariance: number[];
}

interface Data13 {
  header: Header;
  poses: Pose[];
}

interface Data12 {
  linear: Position;
  angular: Position;
}

interface Data11 {
  header: Header;
  status: Status2[];
}

interface Status2 {
  level: number;
  name: string;
  message: string;
  hardware_id: string;
  values: Value[];
}

interface Value {
  key: string;
  value: string;
}

interface Data10 {
  header: Header;
  ns: string;
  id: number;
  type: number;
  action: number;
  pose: Pose;
  scale: Position;
  color: Color;
  lifetime: number;
  frame_locked: boolean;
  points: Position[];
  colors: string[];
  text: string;
  mesh_resource: string;
  mesh_use_embedded_materials: boolean;
}

interface Data9 {
  header: Header;
  polygon: Polygon;
}

interface Polygon {
  points: Position[];
}

interface Data8 {
  level: number;
  state_id: number;
  arguments: number[];
  message: string;
}

interface Data7 {
  header: Header;
  trajectories: string[];
  selected_trajectory_idx: number;
  obstacles_msg: Obstaclesmsg;
  planTEB_time: Data6;
  computeVelocityCommands_time: Data6;
  spinning_state: Data6;
}

interface Obstaclesmsg {
  header: Header;
  obstacles: string[];
}

interface Data6 {
  data: number;
}

interface Data5 {
  header: Header;
  status: Status;
  feedback: Feedback;
}

interface Feedback {
  reached_keypoints: string[];
  total_keypoints: number;
  current_segment_id: number;
  current_pose_id: number;
  state_id: number;
  estimated_time: number;
  elapsed_time: number;
  remaining_time: number;
  progress: number;
  is_recovering: boolean;
  is_testing: boolean;
  is_resuming: boolean;
  is_firstpose_realkp: boolean;
  is_one_spot_cleaning: boolean;
  session_id: string;
}

interface Status {
  goal_id: Goalid;
  status: number;
  text: string;
}

interface Goalid {
  stamp: number;
  id: string;
}

interface Data4 {
  header: Header;
  pose: Pose;
}

interface Data3 {
  transforms: Transform2[];
}

interface Transform2 {
  header: Header;
  child_frame_id: string;
  transform: Transform;
}

interface Transform {
  translation: Position;
  rotation: Orientation;
}

interface Data2 {
  header: Header;
  format: string;
  data: string;
}

interface Datum {
  header: Header;
  ns: string;
  id: number;
  type: number;
  action: number;
  pose: Pose;
  scale: Position;
  color: Color;
  lifetime: number;
  frame_locked: boolean;
  points: Position[];
  colors: string[];
  text: string;
  mesh_resource: string;
  mesh_use_embedded_materials: boolean;
}

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface Header {
  seq: number;
  stamp: number;
  frame_id: string;
}

interface Metadata {
  compressionMethod: string;
  compressedTypes: string[];
  botInfo: BotInfo;
  sessionInfo: SessionInfo;
  botConfig: BotConfig;
  mapMetadata: MapMetadata;
  mapData: MapData;
  botModel: BotModel;
}

interface BotModel {
  format: string;
  filename: string;
  data: string;
}

interface MapData {
  format: string;
  data: string;
}

interface MapMetadata {
  map_load_time: number;
  resolution: number;
  width: number;
  height: number;
  origin: Pose;
}

interface BotConfig {
  BOTTYPE: string;
  LIDAR_MODEL: string;
  LIDAR_ON_BASE: boolean;
  ENABLE_IMU: boolean;
  TBCONTROL_DEVICE: string;
  LIDAR_DEVICE: string;
  RGB_PORT: string;
  RFIDREADER_PORT: string;
  IMU_DEVICE: string;
  WAPP_CLIENT_PORT: number;
  WAPP_API_PORT: number;
  ENABLE_ROSBAG: boolean;
  ROSBAG_LOG_LEVEL: string;
  ENABLE_WEBVIZ: boolean;
  ENABLE_SNAPSHOT: boolean;
  ENABLE_ADJTIMEX_FREQUENCY_QUERY: boolean;
  ENABLE_TEB_FEEDBACK: boolean;
  SYSTEM_STATS_FREQ: number;
  SD_STATUS_PUBLISH_INTERVAL_MS: number;
  ADJTIMEX_FREQUENCY_QUERY_INTERVAL_MS: number;
  ENABLE_CLEAR_NOISE_ON_PATH: boolean;
  ENABLE_NARROW_GAP_CHECK: boolean;
  ENABLE_MAPPING_ASSIST: boolean;
  PATH_TYPE: string;
  ENABLE_FUSION: boolean;
  ENABLE_AMCL_ENLARGE_SEARCH: boolean;
  IMU_MODE: string;
  IMU_ODOM: boolean;
  IMU_TILT_DETECT: boolean;
  WARMUP_TIME: number;
  FOLLOW_SPEED: number;
  CLEAN_PROXIMITY: boolean;
  DEPTHCAM_TIME_CHECK: number;
  ENABLE_SIM: boolean;
  ENABLE_TB_AUTONOMY: boolean;
  ENABLE_TB_COLLISION_DETECTION: boolean;
  ENABLE_UV_ENGINE_DEV: boolean;
  ROS_DEBUG: boolean;
}

interface SessionInfo {
  sessionCode: string;
  session_id: string;
  start_time: string;
  end_time: string;
  duration: number;
  local_start_time: string;
  uptime: number;
  apk_version: string;
  amr_version: string;
  rosbag_log_level: string;
  operator_id: string;
  operator_name: string;
  map_id: string;
  map_name: string;
  is_old_map: boolean;
  lidar_model: string;
  lidar_fw: string;
  lidar_scan_mode: string;
  depthcam_fw: string;
  depthcam_sdk: string;
  depthcam_ros: string;
  path_type: string;
  motion_test: boolean;
  one_spot_cleaning: boolean;
  dosing_modifier: number;
  estimated_time: number;
  total_path_length: number;
  result_id: number;
  result: string;
  total_keypoints: number;
  reached_keypoints: string[];
  missed_keypoints: string[];
  kp_success_rate: number;
  completeness: number;
  semantic_result: string;
  details: Detail[];
  events: string[];
  sessionType: string;
}

interface Detail {
  keypoint: number;
  clean_time: number;
  success: boolean;
  abnormalities: string[];
  debugs: string[];
  pose: Pose;
}

interface Pose {
  position: Position;
  orientation: Orientation;
}

interface Orientation {
  x: number;
  y: number;
  z: number;
  w: number;
}

interface Position {
  x: number;
  y: number;
  z: number;
}

interface BotInfo {
  botID: string;
  botName: string;
  enterpriseName: string;
  enterpriseID: string;
  siteID: null;
  mapID: string;
  mapVersionID: null;
  releaseTrack: string;
  amrVersion: string;
  apkVersion: string;
  server: string;
  autonomyServer: null;
}
