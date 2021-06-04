import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyLinksTypes } from "../@types/MyLinksTypes";

export async function getLinksSave(key: string){
  const myLinks = await AsyncStorage.getItem(key) + '';
  
  const linksSave = JSON.parse(myLinks) || [];

  return linksSave as MyLinksTypes[];
}

export async function saveLinks(key: string, newLink: MyLinksTypes){
  const linkStored = await getLinksSave(key);

  const hasLink = linkStored.some( link => link.id === newLink.id);

  if(!hasLink) {
    linkStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linkStored))
  }

}

export async function deleteLink(key: string,links: MyLinksTypes[], id: string){
  const myLinks = links.filter((item) => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem(key,JSON.stringify(myLinks))

  return myLinks;
}