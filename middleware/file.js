import multer from "multer";
import path from "path";
const __dirname = path.resolve();

app.use(multer({ dest: 'images' }).single('image'));

const MIME_TYPE_MAP={
    'image/png':'png',
    'image/jpg':'jpg',
    'image/jpeg':'jpg'
  
}
const storage = multer.diskStorage({
destination: (req,file,cb)=>{
    const isValid= MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if(isValid) error=null;
    cb(error,"images");
},
filename: (req,file,cb)=>{
    const name=file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    // cb(null,name+'-'+Date.now().toString().replace(/:/g, '-') +'.'+ext);
    cb(null,name+'-'+Math.floor(Math.random() * 10000)+'.'+ext);

}
})

export const extractedFile = multer({storage:storage}).single("image");