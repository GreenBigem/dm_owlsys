import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SideBar() {

    const router = useRouter()
    const id = router.query.id

    return (
        <>
            <div className="flex flex-col p-5 m-2 bg-sky-500/100 rounded-lg">
                <Link href={`/user/contractors/${id}`}>Основные данные</Link>
                <Link href={`/user/contractors/${id}/not_adult_data`}>Свидетельство о рождении</Link>
                <Link href={`/user/contractors/${id}/foreign`}>Загранпаспорт</Link>
                <Link href={`/user/contractors/${id}/foreign`}>Имущество</Link>
                <Link href={`/user/contractors/${id}/marriage`}>Супруг</Link>
                <Link href={`/user/contractors/${id}/children`}>Дети</Link>
            </div>
        </>
    )
}