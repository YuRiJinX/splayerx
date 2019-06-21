import { IPlayInfoStorable } from "@/interfaces/IPlayInfoStorable";
import { info, data } from "@/libs/DataBase";
import { MediaItem, PlaylistItem, RawPlaylistItem } from "@/interfaces/IDB";
import { VIDEO_OBJECT_STORE_NAME, RECENT_OBJECT_STORE_NAME } from "@/constants";
import { mediaQuickHash } from "@/libs/utils";

export default class PlayInfoStorageService implements IPlayInfoStorable {
  /**
   * @description 更新video播放的信息
   * @author tanghaixiang
   * @param {number} videoID
   * @param {MediaItem} data
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   */
  async updateMediaItemBy(videoID: number, data: MediaItem): Promise<boolean> {
    let value = null;
    try {
      value = await info.getValueByKey(VIDEO_OBJECT_STORE_NAME, videoID)
    } catch (error) {
      return false;
    }
    if (value) {
      try {
        await info.update(VIDEO_OBJECT_STORE_NAME, videoID, { ...value, ...data } as MediaItem);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
  /**
   * @description 更新最近播放列表
   * @author tanghaixiang
   * @param {number} playListID
   * @param {PlaylistItem} data
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   */
  async updateRecentPlayedBy(playListID: number, data: PlaylistItem): Promise<boolean> {
    try {
      let playList = await info.getValueByKey(RECENT_OBJECT_STORE_NAME, playListID)
      await info.update(RECENT_OBJECT_STORE_NAME, playList.id, { ...playList, ...data } as PlaylistItem);
      return true;
    } catch (error) {
      return false;
    }

  }

  /**
   * @description 删除播放列表
   * @author tanghaixiang
   * @param {number} playListID
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   */
  async deleteRecentPlayedBy(playListID: number): Promise<boolean> {
    try {
      const { items } = await info.getValueByKey(RECENT_OBJECT_STORE_NAME, playListID);
      await Promise.all(items.map(async (item: number) => {
        try {
          await info.delete(VIDEO_OBJECT_STORE_NAME, item);
        } catch (err) {}
      }));
      await info.delete(RECENT_OBJECT_STORE_NAME, playListID);
      return true;
    } catch (error) {
      return false;
    }
  }
  async addRecentPlayedBy(paths: string[]): Promise<number> {
    return 0;
  }
  async getAllRecentPlayed(): Promise<PlaylistItem[]> {
    const results = await info.getAll('recent-played');
    return results.sort((a: PlaylistItem, b: PlaylistItem) => b.lastOpened - a.lastOpened);
  }
}


export const playInfoStorageService = new PlayInfoStorageService()