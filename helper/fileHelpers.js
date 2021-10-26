

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;

const videoFilter = function(req, file, cb) {
    // Accept videos only
    if (!file.originalname.match(/\.(mp4|MP4|mkv|MOV)$/)) {
        req.fileValidationError = 'Only video files are allowed!';
        return cb(new Error('Only MP4, MKV, and MOV files are allowed!'), false);
    }
    cb(null, true);
};
exports.videoFilter = videoFilter;

const documentFilter = function(req, file, cb) {
    // Accept videos only
    if (!file.originalname.match(/\.(DOC|doc|DOCX|docx|PDF|pdf)$/)) {
        req.fileValidationError = 'Only video files are allowed!';
        return cb(new Error('Only PDF and DOC files are allowed!'), false);
    }
    cb(null, true);
};
exports.documentFilter = documentFilter;