'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@/utils/store/user';
import Link from 'next/link';
export default function NavBar(): JSX.Element {
	const user = useUser((state) => state.user);

	return (
		<div className='w-full'>
			<div className='p-4 flex justify-between'>
				<h1 className='text-foreground grotesk'>MatwaRTC</h1>
				<div>
					{user ? (
						<div></div>
					) : (
						<Link href='/login'>
							<Button variant={'secondary'}>Login</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
