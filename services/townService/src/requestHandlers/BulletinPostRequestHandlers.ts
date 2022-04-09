import { deletePost } from '../models/posts/dao';
import CoveyTownsStore from '../lib/CoveyTownsStore';
import { PostCreateRequest, PostCreateResponse, PostDeleteRequest, ResponseEnvelope } from '../client/TownsServiceClient';

export async function postCreateHandler(requestData: PostCreateRequest): Promise<ResponseEnvelope<PostCreateResponse>> {
  const townsStore = CoveyTownsStore.getInstance();
  const coveyTownController = townsStore.getControllerForTown(requestData.coveyTownID);
  if (!coveyTownController) {
    return {
      isOK: false,
      message: 'Error: No such town',
    };
  }

  const newPost = await coveyTownController.addBulletinPost(requestData);
  if (!newPost) {
    return {
      isOK: false,
      message: 'Error: Failed to create post',
    };
  }

  return {
    isOK: true,
    response: {
      post: newPost,
    },
  };
}

export function postDeleteHandler(requestData: PostDeleteRequest): ResponseEnvelope<Record<string, null>> {
  deletePost(requestData.postID);
  return {
    isOK: true,
    response: {},
  };
}