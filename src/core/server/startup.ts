import './utility/ipc'; // Used to reconnect, do not remove.
import './systems/index';
import { connectLocalClient } from './utility/reconnect';

connectLocalClient();
