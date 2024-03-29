'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@/utils/store/user';
import Link from 'next/link';
import SessionProvider from '@/components/providers/sessionProvider';
import ProfileMenu from './ProfileMenu';
export default function NavBar(): JSX.Element {
	const user = useUser((state) => state.user);

	return (
		<div className='w-full'>
			<SessionProvider />
			<div className='p-4 flex justify-between'>
				<h1 className='text-foreground grotesk align-baseline'>
					MatwaRTC
				</h1>
				<div>
					{user ? (
						<div>
							<ProfileMenu />
						</div>
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
