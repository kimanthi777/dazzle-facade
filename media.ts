// photos, videos, audios

// title, description, url

export class Media {
    constructor(
        public title: string,
        public description: string,
        public url: string
    ){}

    play():void{
        console.log('media is playing')
    }

    size():number{
        const SIZE_IN_MBs = 30
        console.log(`Media size is: ${SIZE_IN_MBs} Mbs`)

        return SIZE_IN_MBs
    }

    delete():void{
        console.log('deleting...')
        setTimeout(()=>{
            console.log('deleted')
        }, 2000)
    }
}

export interface IPhotoProps extends Omit<Media, 'play'>{
    resolution: string;
    dateTaken: Date;
}

export class Photo extends Media implements IPhotoProps{
    constructor(
        public title: string,
        public description: string,
        public url: string,
        public resolution: string,
        public dateTaken: Date
    ){
        super(title, description, url)
    }

    edit(): void{
        console.log('editing photo...')
    }

    crop(): void {
        console.log('cropped!')
    }
}

interface IVideoProps extends Media{
    duration: number;
    captions: string[];
    trim():void;
    pause():void;
    loop():Video;
}

export class Video extends Media implements IVideoProps{
    constructor(
        public title: string,
        public description: string,
        public url: string,
        public duration: number,
        public captions: string[]
    ){
        super(title, description, url)
    }

    trim():void{
        console.log('trimming vid')
    }

    pause():void{
        console.log('paused')
    }

    loop():Video{
        console.log('looping...')
        return this
    }
}


interface IAudioProps extends Media{
    equalizer: number[];
    setAsRingTone(): void
}

export class Audio extends Media implements IAudioProps{
    constructor(
        public title: string,
        public description: string,
        public url: string,
        public equalizer: number[],
        public duration: number
    ){
        super(title, description, url)
    }

    setAsRingTone(): void {
        console.log('set as ringtone...')
    }
        trim():void{
        console.log('trimming vid')
    }

    pause():void{
        console.log('paused')
    }

    loop():Audio{
        console.log('looping...')
        return this
    }
}

const pic = new Photo('winchy.jpg', 'snap @Juja JKUAT 2023', 'https://google.drive.com', '1080x2400', new Date())


function getSnapDetails(){
    const GET_DATE_TAKEN = pic.dateTaken

    pic.play()
    pic.crop()
    pic.edit()
    pic.size()
    console.log(GET_DATE_TAKEN)
    pic.delete()
}

getSnapDetails()