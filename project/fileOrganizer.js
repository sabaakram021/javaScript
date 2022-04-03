let fs=require('fs');
let path=require('path');
let folderPath=process.argv[2];
console.log(folderPath);


let extentions={
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Image:[".jpeg",".jpg",".img",".png",".gif"],
    Document:[".pdf",".doc",".xlsx"],
    Software:[".exe"]
}


let folderExists=fs.existsSync(folderPath);
if(folderExists)
{
    let files=fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++)
    {
        let ext=path.extname(files[i]);
        let folderName=giveFolderName(ext);
        // console.log("ext--",ext," ","foldername",folderName);
        let pathOfFolder=path.join(folderPath,folderName);//folder path to add files
        let exist=fs.existsSync(pathOfFolder);
        if(exist)
        {
            moveFile(folderPath,pathOfFolder,files[i]);
        }
        else 
        {
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }   
    }
}
else
{
    console.log("Please Enter a valid path!!!");
}
function giveFolderName(ext)
{
    for(let key in extentions)
    {
        let extArr=extentions[key];
        for(let i=0;i<extArr.length;i++)
        {
            if(extArr[i]==ext)
            {
                return key;
            }
        }
    }
    return 'other';
}

function moveFile(folderPath,pathOfFolder,fileName)
{
    let sourcePath=path.join(folderPath,fileName);
    let destiPath=path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destiPath);
    fs.unlinkSync(sourcePath);
}