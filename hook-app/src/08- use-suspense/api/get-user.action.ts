export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {
    console.log('Call funtion')
    await new Promise((res) => setTimeout(res, 2000));
   
    console.log('Solved funtion')

    return {
        id: id,
        name: 'Elvin Mendez',
        location: 'Switzerland',
        role: 'Software Developer'
    }
}