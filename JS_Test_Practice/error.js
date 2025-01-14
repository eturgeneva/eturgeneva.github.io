function fileOpen(){
    throw Error('no pisya');
    console.log('pisya');
};

try {
    fileOpen();
} catch (e) {
    console.log('error handled')
}