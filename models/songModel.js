
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    spotifyId: {
        type: String,
        unique: true,
        required: [true, "Please provide a song id"],
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
    },
    image:{
        type: String,
    },
    artistSpotifyId: {
        type: String,
        ref: "artists",
    },
    totalStreams: {
        type: Number,
    },
    dailyStreams: {
        type: Object,
        default: {},
    },

}, {
    timestamps: true
}
)

const Song = mongoose.models.songs || mongoose.model("songs", songSchema);

module.exports = Song;