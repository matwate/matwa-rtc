import { useUser } from '@/utils/store/user';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Link from 'next/link';
import { LayoutDashboard, LogOut, Settings } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
export default function ProfileMenu(): JSX.Element {
    const supabase = createClient();

	const user = useUser((state) => state.user);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    }

	return (
		<Popover>
			<PopoverTrigger>
				<Button
					asChild
					variant={'secondary'}>
					<div className='p-1'>
						<Avatar className='p-1'>
							<AvatarImage src={user?.user_metadata.avatar_url} />
						</Avatar>
						<Badge variant={'secondary'}>
							{user?.user_metadata.preferred_username
								.charAt(0)
								.toUpperCase() +
								user?.user_metadata.preferred_username.slice(
									1
								) || user?.email}
						</Badge>
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='border-muted-foreground'>
				<div className='flex flex-col p-4 space-y-3'>
					<div>
						<p className='text-muted-foreground'>
							{user?.user_metadata.preferred_username
								.charAt(0)
								.toUpperCase() +
								user?.user_metadata.preferred_username.slice(
									1
								) || user?.email}
						</p>
					</div>
					<Link href={'/dashboard'}>
						<Button
							className='w-full flex justify-between items-center'
							variant={'ghost'}>
							Dashboard
                            <LayoutDashboard className='w-4 text-muted-foreground' />
						</Button>
					</Link>
					<Link href={'/settings'}>
						<Button
							className='w-full flex justify-between items-center'
							variant={'ghost'}>
							Settings
                            <Settings className='w-4 text-muted-foreground' />
						</Button>
					</Link>
					<Button
						className='w-full flex justify-between items-center'
						variant={'ghost'} onClick={handleLogout}>
						Logout
                        <LogOut className='w-4 text-muted-foreground' />
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
