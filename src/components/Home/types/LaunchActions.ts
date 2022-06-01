import { Launches } from '../constants/launches';
import type { Launch } from '@shared/api/types/Launch';

interface LaunchActionPayload {
  filterValue: Launches;
}

export interface LaunchActionPayloadRequest extends LaunchActionPayload {
  isScrollLoading: boolean;
}

export interface LaunchActionPayloadSuccess extends LaunchActionPayload {
  launches: Launch[];
  launchAmount: number;
}

export interface LaunchActionRequest {
  type: string;
  payload: LaunchActionPayloadRequest;
}

export interface LaunchActionSuccess {
  type: string;
  payload: LaunchActionPayloadSuccess;
}

export interface LaunchActionError {
  type: string;
  payload: LaunchActionPayload;
}

export type LaunchAction =
  | LaunchActionError
  | LaunchActionRequest
  | LaunchActionSuccess;
