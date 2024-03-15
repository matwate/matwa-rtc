'use client';

import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { usePathname } from 'next/navigation';


export default function LogInForm() {
    const  pathname  = usePathname();
	
	const supabase = createClient();
	const handleLogin = async () => {
        supabase.auth.signInWithOAuth({
            provider: 'github',
		    options: {
			    redirectTo: location.origin + 'auth/callback?next=' + pathname,
		    }
        })
		
	};
	return (
		<Button variant={'secondary'} onClick={handleLogin}>
			<Github className='w-4 mr-2' />
			Sign in with github
		</Button>
	);
}
