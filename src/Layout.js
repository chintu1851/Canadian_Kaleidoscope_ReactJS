const Layout = ({user}) => {
    return (
        <div className='first'>
            {user.map((user) => (
                <div key={user.id}>
                    {
                        user.id % 2 === 1 ? (
                            <div>
                                <h2 className='h1third'>Home</h2>
                                <div className='third'>
                                    <img src={user.img} alt='firstimage' className="images"></img>
                                    <p>{user.content}</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className='h1fourth'>Home</h2>
                                <div className='fourth'>
                                    <p>{user.content}</p>
                                    <img src={user.img} alt='firstimage' className="images"></img>
                                </div>
                            </div>
                        )
                    }
                </div>

            ))}
        </div>
    );

}


export default Layout