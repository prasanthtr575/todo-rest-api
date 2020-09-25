import { testEnvironmentVariable } from '../settings';

export const handlePostReq = (req, res) => res.status(200).json({ message: `POST | ${testEnvironmentVariable}` });
export const handleGetReq = (req, res) => res.status(200).json({ message: `GET | ${testEnvironmentVariable}` });
export const handleUpdateReq = (req, res) => res.status(200).json({ message: `PUT | ${testEnvironmentVariable}` });
export const handleDeleteReq = (req, res) => res.status(200).json({ message: `DELETE | ${testEnvironmentVariable}` });