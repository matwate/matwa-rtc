import { useUser } from '@/utils/store/user';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage } from '../ui/avatar';
export default function ProfileMenu(): JSX.Element {
	const user = useUser((state) => state.user);

	return (
		<Button
			asChild
			variant={'secondary'}>
			<div className='p-1'>
				<Avatar className='p-1'>
                    <AvatarImage src={user?.user_metadata.avatar_url}/>
                </Avatar>
				<Badge variant={'secondary'}>
					{user?.user_metadata.preferred_username
						.charAt(0)
						.toUpperCase() +
						user?.user_metadata.preferred_username.slice(1) ||
						user?.email}
				</Badge>
			</div>
		</Button>
	);
}
