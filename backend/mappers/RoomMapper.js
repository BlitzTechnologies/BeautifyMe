const { Room } = require("../models/Room");

class RoomMapper {
    // Converts a plain object to a Room instance
    static fromObject(obj) {
        if (!obj || typeof obj !== 'object') {
            throw new Error('Invalid input: must be an object');
        }
        const room = new Room();
        room.uuid = obj.uuid || '',
        room.code = obj.code || '';
        room.host = obj.host || '';
        room.participants = obj.participants || '';
        room.createdBy = obj.createdBy || '';
        room.settings = obj.settings || '';
        return room;
    }

    // Converts a Room instance to a plain object
    static toObject(room) {
        if (!(room instanceof Room)) {
            throw new Error('Invalid input: must be an instance of Room');
        }
        return {
            uuid: room.uuid,
            code: room.code,
            host: room.host,
            participants: room.participants,
            createdBy: room.createdBy,
            settings: room.settings
        };
    }
}

module.exports = {
    RoomMapper
};
