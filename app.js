FilesFS = new CollectionFS('files');

if (Meteor.isClient) {
    Template.upload.events({
        'change .fileUploader': function (e) {
            var files = e.target.files;
            FilesFS.storeFiles(files);
        }
    });

    Template.filelist.files = function() {
        return FilesFS.find({}, { sort: { uploadDate:-1 } });
    };
}

if (Meteor.isServer) {
}
