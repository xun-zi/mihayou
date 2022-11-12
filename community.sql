/*
 Navicat Premium Data Transfer

 Source Server         : root
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : community

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 12/11/2022 09:49:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comm_aricle
-- ----------------------------
DROP TABLE IF EXISTS `comm_aricle`;
CREATE TABLE `comm_aricle`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgCount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `praise` int UNSIGNED NULL DEFAULT NULL,
  `commit` int UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_aricle
-- ----------------------------
INSERT INTO `comm_aricle` VALUES (33, '第一个文章', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '2', '1665802779.482', 0, 0);
INSERT INTO `comm_aricle` VALUES (34, '第二个文章', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '1', '1665802838.942', 0, 0);
INSERT INTO `comm_aricle` VALUES (35, '1111', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '1', '1665803642.595', 0, 0);
INSERT INTO `comm_aricle` VALUES (47, '再来', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '0', '1665808927.65', 0, 0);
INSERT INTO `comm_aricle` VALUES (48, '1111', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '1', '1666064604.767', 0, 0);
INSERT INTO `comm_aricle` VALUES (49, '1111', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', '1', '1666064620.059', 0, 0);

-- ----------------------------
-- Table structure for comm_aricle_com
-- ----------------------------
DROP TABLE IF EXISTS `comm_aricle_com`;
CREATE TABLE `comm_aricle_com`  (
  `aricleId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `avatarUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` int NULL DEFAULT NULL,
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `replayAim` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `replayName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `replayCnt` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_aricle_com
-- ----------------------------
INSERT INTO `comm_aricle_com` VALUES ('47', 47, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '[微笑][脱单doge][热]', 1665820694, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 48, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '小丑1111 [微笑]', 1665831060, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 49, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '这是成功了 [脱单doge]', 1665831328, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('38', 50, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '111', 1665832196, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('38', 51, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '111', 1665832215, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('38', 52, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '1', 1665832413, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('38', 53, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '1', 1665832477, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 54, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '1111', 1665883171, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 55, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '1', 1666007218, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 56, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '再来', 1666008391, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 57, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '再来', 1666009118, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 58, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', 'ke', 1666010050, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('47', 59, 'http://tmp/JJgD4ly7YWr893511622f904607285eaef838633f6de.jpeg', 'zsc', '[微笑][脱单doge][热]', 1666010086, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('35', 60, 'http://tmp/FKoUo2AKoWtVffeb16c3fc9cd5cce5fd44b101bf1956.jpeg', 'zsc', '[热][脱单doge][微笑]', 1666064855, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);
INSERT INTO `comm_aricle_com` VALUES ('49', 61, 'http://tmp/FKoUo2AKoWtVffeb16c3fc9cd5cce5fd44b101bf1956.jpeg', 'zsc', '1', 1666444346, 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'oBXI35KPQ5BSgE6HRdHqBarnftBQ', 'zsc', 0);

-- ----------------------------
-- Table structure for comm_aricle_com2
-- ----------------------------
DROP TABLE IF EXISTS `comm_aricle_com2`;
CREATE TABLE `comm_aricle_com2`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `comId` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_aricle_com2
-- ----------------------------

-- ----------------------------
-- Table structure for comm_dynamic
-- ----------------------------
DROP TABLE IF EXISTS `comm_dynamic`;
CREATE TABLE `comm_dynamic`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `aricleId` int NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_dynamic
-- ----------------------------

-- ----------------------------
-- Table structure for comm_dynamiccnt
-- ----------------------------
DROP TABLE IF EXISTS `comm_dynamiccnt`;
CREATE TABLE `comm_dynamiccnt`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cnt` int NULL DEFAULT NULL,
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_dynamiccnt
-- ----------------------------
INSERT INTO `comm_dynamiccnt` VALUES ('oBXI35KPQ5BSgE6HRdHqBarnftBQ', 0);

-- ----------------------------
-- Table structure for comm_praise
-- ----------------------------
DROP TABLE IF EXISTS `comm_praise`;
CREATE TABLE `comm_praise`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '点赞人',
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '点赞目标',
  `uuid` int NOT NULL AUTO_INCREMENT COMMENT '自增',
  PRIMARY KEY (`uuid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 67 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_praise
-- ----------------------------

-- ----------------------------
-- Table structure for comm_replaycontent
-- ----------------------------
DROP TABLE IF EXISTS `comm_replaycontent`;
CREATE TABLE `comm_replaycontent`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `replayOpenid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `replaycontent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `time` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `openid1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `aricleId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_replaycontent
-- ----------------------------

-- ----------------------------
-- Table structure for comm_replaycount
-- ----------------------------
DROP TABLE IF EXISTS `comm_replaycount`;
CREATE TABLE `comm_replaycount`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cnt` int NULL DEFAULT NULL,
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_replaycount
-- ----------------------------
INSERT INTO `comm_replaycount` VALUES ('oBXI35KPQ5BSgE6HRdHqBarnftBQ', 0);

-- ----------------------------
-- Table structure for comm_star_big
-- ----------------------------
DROP TABLE IF EXISTS `comm_star_big`;
CREATE TABLE `comm_star_big`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cntStar` int NULL DEFAULT NULL,
  `cntStared` int NULL DEFAULT NULL,
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_star_big
-- ----------------------------
INSERT INTO `comm_star_big` VALUES ('oBXI35KPQ5BSgE6HRdHqBarnftBQ', 0, 0);

-- ----------------------------
-- Table structure for comm_star_small
-- ----------------------------
DROP TABLE IF EXISTS `comm_star_small`;
CREATE TABLE `comm_star_small`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `openid0` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `openid1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_star_small
-- ----------------------------

-- ----------------------------
-- Table structure for comm_user
-- ----------------------------
DROP TABLE IF EXISTS `comm_user`;
CREATE TABLE `comm_user`  (
  `openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `session_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comm_user
-- ----------------------------
INSERT INTO `comm_user` VALUES ('oBXI35KPQ5BSgE6HRdHqBarnftBQ', '6/A9jbwXQOox2KqQIztXSA==', 'zsc', 'http://tmp/FKoUo2AKoWtVffeb16c3fc9cd5cce5fd44b101bf1956.jpeg');

SET FOREIGN_KEY_CHECKS = 1;
