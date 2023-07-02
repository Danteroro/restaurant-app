<?php


include("api.php");


try{
    if(!empty($_GET['demande'])){
        $url = explode("/", filter_var($_GET['demande'],FILTER_SANITIZE_URL));
        switch($url[0]){
            case "home" :
                if(empty($url[1])){
                    getPlatGalleryList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "entree" :
                if(empty($url[1])){
                    getEntreeList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "plat" :
                if(empty($url[1])){
                    getPlatList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "adduser" :
                if(empty($url[1])){
                    createUser();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "dessert" :
                if(empty($url[1])){
                    getDessertList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "menu" :
                if(empty($url[1])){
                    getMenuList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "horaire" :
                if(empty($url[1])){
                    getHoraireList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "user" :
                if(empty($url[1])){
                    getUsersList();
                } else {
                    getPlatGaleryById($url[1]);
                }
            break;
            case "platgallery" :
                if(!empty($url[1])){
                    getPlatGaleryById($url[1]); 
                } else {
                    throw new Exception('Renseigner l\'url');
                }
            break;
            default: throw new Exception('Vérifiez l\'url');
        }
    } else {
        throw new Exception ("Un problème au niveau de la récupération des données.");
    }
} catch(Exception $e){
    $erreur =[
        "message" => $e->getMessage(),
        "code" => $e->getCode()
    ];
    print_r($erreur);
}