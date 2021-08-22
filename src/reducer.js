export const initialState ={
    user: null,
    playlists:[],
    playing: false,
    item: null,
    //token:'BQBYD4RR0EUtTKhvFF2be0iADbyJsUruRRaAPdQkLfWyEEZcxTXcmU4Ye7QIa0A6x1mT0mjNour7Xz4bxMNblRilul8vH8DO4OIUTJ2q95Dhfhr-B4u7EWYy4orwf3WVBMB0Q06XJ-MzmvVGkTB0UoqLsn38UOKRf2V4cyrUqzAfo8GiybX5'
}


const reducer = (state, action) => {

    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists,
                }
        default:
            return state;
    }

}

export default reducer;