import mongoose from "mongoose";

export const VIDEO_DIMENTIONS = {
  height: 1080,
  width: 1920,
} as const;

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformations: {
    height: number;
    width: number;
    quality?: number;
  };
}

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requierd: true,
    },
    thumbnailUrl: {
      type: String,
      requierd: true,
    },
    videoUrl: {
      type: String,
      requierd: true,
    },
    controls: {
      tyoe: Boolean,
      default: true,
    },
    transformation: {
      height: {
        type: Number,
        default: VIDEO_DIMENTIONS.height,
      },
      width: {
        type: Number,
        default: VIDEO_DIMENTIONS.width,
      },
      quality: {
        type: Number,
        min: 1,
        max: 100,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Video =
  mongoose.models?.Video || mongoose.model<IVideo>("Video", videoSchema);

export default Video;
