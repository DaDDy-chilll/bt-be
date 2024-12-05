import { PhotoInstance } from "../instances/photo/create.instance";
import { PhotoRepository } from "../repositories/photo.repository";

export class PhotoService {
  private photoRepository = new PhotoRepository();

  async createPhoto(data: PhotoInstance) {
    const code = `${Date.now()}`;
    data.code = code;
    return await this.photoRepository.create(data);
  }

  async getPhotoById(id: number) {
    return await this.photoRepository.getPhotoById(id);
  }

  async updatePhoto(id: number, photo_path: string) {
    return await this.photoRepository.update(id, photo_path);
  }

  async deletePhoto(id: number) {
    return await this.photoRepository.delete(id);
  }

  async deletePhotos(m_photos: any) {
    return await this.photoRepository.deletePhotos(m_photos);
  }

  async deletePhotoPaths(m_photos: any): Promise<string[]> {
    return await this.photoRepository.deletePhotoPaths(m_photos);
  }
}
