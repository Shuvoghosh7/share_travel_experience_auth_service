import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.get('/', RoomController.getAllFromDB);
router.post(
  '/create_room',RoomController.insertIntoDB
);

export const roomRoutes = router;