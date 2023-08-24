import { GameInterface } from "./Interfaces/GameInterface";

export const GAMES: GameInterface[] = [{
    id:1,
    name:'World of Tanks',
    shortcut:'wot',
    imgUrl: '/assets/images/wotBanner.jpg',
    activeRandomizer: true
},{
    id:2,
    name:'League of Legends',
    shortcut:'lol',
    imgUrl: '/assets/images/lolBanner.jpg',
    activeRandomizer: false
}]