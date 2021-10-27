import React from 'react';
import { PageHeader } from '../components/PageHeader';

const NotFoundPage = () => {
    return (
        <div>
            <PageHeader heading='Page Not Found' subtext="Sorry, it looks like the page you're looking for could not be found." buttonLink='/' buttonText='Go Home' />
        </div>
    )
}
export default NotFoundPage;