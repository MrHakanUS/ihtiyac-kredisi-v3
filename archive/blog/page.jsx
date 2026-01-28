import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import MetaComponent from '@/components/common/MetaComponent';
import PageTitleComponent from '../../components/common/PageTitleComponent';
const BlogList = () => {
    const blogDir = path.join(process.cwd(), 'app/blog');

    const files = fs.readdirSync(blogDir);

    const blogPosts = files
        .filter(file => file !== 'page.jsx')
        .map(file => ({
            title: file.replace(/-/g, ' ').replace('.jsx', ''),
            slug: file.replace('.jsx', '')
        }));

    return (
        <div>
            <MetaComponent
                title={'Blog Yazıları'}
                desc={`Kredi ve Finans hakkında bilgi verici güncel yazılarımıza bu başlık altından ulaşabilirsiniz.`}
            />
            <main className='flex flex-col'>
                <PageTitleComponent title={'Blog Yazıları'} subtitle={`Kredi ve Finans hakkında bilgi verici güncel yazılarımıza bu başlık altından ulaşabilirsiniz.`} />

                <div
                    className={`custom-container-1 flex items-center justify-center gap-x-[5%] mt-[48px] flex-wrap xl:flex-nowrap`}
                >
                    <div className='w-full xl:w-[60%]'>
                        <div className='flex flex-col gap-y-3 w-full rounded-[3px] px-2'>
                            <ul className='flex flex-wrap'>
                                {blogPosts.map(post => (
                                    <>
                                        <li style={{ 'listStyleType': 'square' }} className='capitalize w-[48%] text-xl text-blue-500' key={post.slug}>
                                            <Link className='text-black-100 hover:text-blue-500' href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BlogList;
