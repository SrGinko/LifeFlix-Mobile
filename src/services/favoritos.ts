import AsyncStorage from "@react-native-async-storage/async-storage";

type Favorito = {
    id: any;
    nome: any;
    url: any;
    image: any
}

const FAVORITOS_KEY = '@favoritos'

export const salvarFavoritos = async (favoritos: Favorito[]) => {
    try {
        const jsonValue = JSON.stringify(favoritos)
        await AsyncStorage.setItem(FAVORITOS_KEY, jsonValue)
    } catch (error) {
        console.error("Erro ao salvar favoritos:", error)
    }
}

export const lerFavoritos = async (): Promise<any> => {
    try {
        const jsonValue = await AsyncStorage.getItem(FAVORITOS_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (error) {
        console.log(error)
    }
}

export const adicionarFavorito = async (item: Favorito) => {
    const favoritos = await lerFavoritos()
    if (!favoritos.find((f: any) => f.id === item.id)) {
        favoritos.push(item)
        await salvarFavoritos(favoritos)
    }
}

export const removerFavorito = async (id: any) => {
    let favoritos = await lerFavoritos()
    favoritos = favoritos.filter((f: any) => f.id !== id)
    await salvarFavoritos(favoritos)
}