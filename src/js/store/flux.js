const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			characters:[],
			planets:[],
			loadingCharacter:true,
			loadingPlanets:true,
			charactersID:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://www.swapi.tech/api/people/')
				.then((response)=> response.json())
				.then(data => setStore({characters: data.results, loadingCharacter:false}))
			},

			loadSomePlanets: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://www.swapi.tech/api/planets/')
				.then((response)=> response.json())
				.then(data => {setStore({planets:data.results, loadingPlanets: false}),console.log(store.loadingPlanets);})
				},

				getIdCharacters: (id) => {
					/**
						fetch().then().then(data => setStore({ "foo": data.bar }))
					*/
					fetch(`https://www.swapi.tech/api/people/${id}`)
					.then((response)=> response.json())
					.then(data => console.log(data.results.properties))
					},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
