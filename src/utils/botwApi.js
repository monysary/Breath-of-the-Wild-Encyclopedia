import axios from "axios";

const fetchEquipment = () => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
};

const fetchMaterials = () => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/materials')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
};

const fetchTreasure = () => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/treasure')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
};

const fetchCreatures = () => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
};

const fetchMonsters = () => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
};

export {
    fetchEquipment,
    fetchMaterials,
    fetchTreasure,
    fetchCreatures,
    fetchMonsters
}