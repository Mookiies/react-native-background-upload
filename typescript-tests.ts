import Upload from 'react-native-background-upload';

Upload.addListener("progress", 'id', (response) => {
  response.id;
  response.progress;
}).remove();
Upload.addListener("error", 'id', (response) => {
  response.id;
  response.error;
}).remove();
Upload.addListener("completed", 'id', (response) => {
  response.id;
  response.responseBody;
  response.responseCode;
}).remove();
Upload.addListener("cancelled", 'id', (response) => {
  response.id
}).remove();
Upload.addListener("progress", null, () => {}).remove();
Upload.addListener("error", null, () => {}).remove();
