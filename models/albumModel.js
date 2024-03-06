const mongoose = require("mongoose");


const albumSchema = new mongoose.Schema({
    spotifyId: {
        type: String,
        unique: true,
        required: [true, "Please provide a song id"],
    },
    image:{
        type: String,
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
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

const Album = mongoose.models.albums || mongoose.model("albums", albumSchema);

module.exports=  Album;