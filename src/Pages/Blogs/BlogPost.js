

import { Link } from 'react-router-dom'

const BlogPost = (props) => {
    const { className, otherProps } = props
    return (
        <div className={'max-w-md rounded overflow-hidden pb-6 pentutor-shadow mx-auto ' + className}>
            <div className='w-full h-44 bg-no-repeat bg-center bg-cover px-0.5 relative' style={{ backgroundImage: 'url("/images/blog/blogImage.png")' }}>
                <p className='shadow-lg capitalize text-white w-full bg-yellow-450 py-1 relative px-2 rounded text-lg font-semibold text-center ' style={{ top: '85%' }}>Online indivisual coaching</p>
            </div>
            <div className='px-6 py-9'>
                <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nascetur vitae gravida amet. Massa sit nunc magna vitae. Molestie ultrices facilisi egestas aliquam nunc. Fringilla potenti</p>
            </div>
            <div className='text-center'>
                <Link to='/blogs/view/Id_Here/' className='py-1 px-5 text-center text-white bg-yellow-450 rounded mx-auto inline-block'>Read More</Link>
            </div>

        </div>
    )
}

export default BlogPost