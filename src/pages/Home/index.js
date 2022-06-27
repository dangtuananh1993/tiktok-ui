import { Fragment, useEffect, useState } from 'react';

const users = [
    {
        id: 1,
        name: 'Hai',
        email: 'hai@mail.com',
        hobby: ['game'],
        age: 18,
        experience: 5,
    },
    {
        id: 2,
        name: 'Anh',
        email: 'anh@mail.com',
        hobby: ['food'],
        age: 18,
        experience: 1,
    },
    {
        id: 3,
        name: 'Hao',
        email: 'hao@mail.com',
        hobby: ['food', 'game'],
        age: 18,
        experience: 3,
    },
    {
        id: 4,
        name: 'Hieu',
        email: 'hieu@mail.com',
        hobby: ['food', 'sport'],
        age: 12,
        experience: 3,
    },
    {
        id: 5,
        name: 'Luan',
        email: 'hieu@mail.com',
        hobby: ['food', 'sport'],
        age: 19,
        experience: 4,
    },
    {
        id: 6,
        name: 'Thuan',
        email: 'hieu@mail.com',
        hobby: ['food', 'sport'],
        age: 18,
        experience: 3,
    },
];

// const userMapCustom = users.map((user, index, originArr) => {
//     return {
//         ...user,
//         name: `${user.name === 'Hai'? user.name = 'Hai XOm' : user.name}`
//     }
// })

// console.log(userMapCustom);
let newUsers = users.map((user) => ({
    ...user,
    name: `${user.name === 'Hai' ? 'Hai Xom' : user.name}`,
}));

const userReduce = users.reduce(
    (acc, cur) => ({
        ...acc,
        [cur.name]: cur,
    }),
    {},
);

console.log('new users:', newUsers);
console.log('origin:', users);
console.log('reduce user: ', userReduce);

const userFilter = users.filter((user) => {
    return user.name === 'Hai' || user.name === 'Hao';
});

function Home() {
    const [imageInfo, setImageInfo] = useState([]);
    const imageInfoFilter = [...imageInfo].filter((image) => {
        return image.albumId === 1;
    });

    // console.log('image info XX: ', imageInfoFilter);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => {
                setImageInfo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h2>Home</h2>
            {users.map((user, index, oldUser) => (
                <div key={index}>
                    {/* {console.log(oldUser)} */}
                    <h2> name: {user.name === 'Hai' ? 'Hai Xom' : user.name}</h2>
                    {user.id}
                    <p>email: {user.email}</p>
                    <p>
                        hobby:
                        {user.hobby.map((hb, index) => (
                            <span key={index}>{hb}</span>
                        ))}
                        {user.hobby.forEach((hb) => {
                            return <span>hobby: {hb}</span>;
                        })}
                    </p>
                </div>
            ))}
            <div>
                <h1>Image</h1>
                {imageInfoFilter.map((image) => (
                    <Fragment key={image.id}>
                        <h1>{image.title}</h1>
                        <h2>{image.id}</h2>
                        <img src={image.url} alt={image.title} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Home;
