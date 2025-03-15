import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GaasComponent } from './pages/gaas/gaas.component';
import { JobsArchivalComponent } from './pages/jobs-archival/jobs-archival.component';
import { RepoRankComponent } from './pages/repo-rank/repo-rank.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ResgenratorComponent } from './pages/resgenrator/resgenrator.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    // Authentication Routes
    {
        path: '', component: AuthLayoutComponent, children: [
            //tempo do not remove
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'home', component: LandingComponent, title: 'Home' },
            { path: 'auth', component: AuthComponent, title: 'auth' },
            { path: 'signup', component: SignupComponent, title: 'Signup' }
        ]
    },

    // Main Layout Routes
    {
        path: '', component: MainLayoutComponent, children: [
            
            { path: 'profile', component: ProfileComponent, title: 'Profile' },
            { path: 'gaas', component: GaasComponent, title: 'GAAS' },
            { path: 'jobs', component: JobsArchivalComponent, title: 'Jobs' },
            { path: 'repos', component: RepoRankComponent, title: 'Repositories' },
            { path: 'resumes', component: ResumeComponent, title: 'Resumes' },
            { path: 'blog', component: BlogPostComponent, title: 'Blog' },
            { path: 'generator', component: ResgenratorComponent, title: 'Resume Generator' }
        ]
    },

    // Redirect unknown routes to home
    { path: '**', redirectTo: 'auth/home', pathMatch: 'full' }
];
