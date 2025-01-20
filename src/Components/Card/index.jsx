const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-2 left-2 bg-white/60 rounded-lg text-xs px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg'
                src='https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Headphones'></img>
                <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>
                    +
                </div>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-medium'>$300</span>
            </p>
        </div>
    )
}

export { Card }