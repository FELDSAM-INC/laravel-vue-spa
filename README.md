# Laravel-Buefy SPA 

> A Laravel-Vue SPA starter project template base forked from cretueusebiu/laravel-vue-spa using Bulma in place of Bootstrap leveraging the pre-made Vue components of Buefy.

> A Laravel-Vue SPA starter kit.

<p align="center">
<img src="https://i.imgur.com/b2rl4me.png">
</p>

## Features

- Laravel 8
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Socialite integration
- Buefy + Font Awesome 5

## FURTHER DETAILS
- For more information on how this template works, see the original project repository at [FELDSAM-INC/laravel-vue-spa](https://github.com/FELDSAM-INC/laravel-vue-spa).
- The documentation here is basically copy/pasted from cretueusebiu.
- Visit [Buefy.org](https://buefy.org) for documentation on Buefy components.

## Installation

- `composer create-project --prefer-dist feldsam-inc/laravel-buefy-spa`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install`

## Usage

#### Development

```bash
npm run dev
```

#### Production

```bash
npm run build
```

## Socialite

This project comes with GitHub as an example for [Laravel Socialite](https://laravel.com/docs/5.8/socialite).

To enable the provider create a new GitHub application and use `https://example.com/api/oauth/github/callback` as the Authorization callback URL.

Edit `.env` and set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` with the keys form your GitHub application.

For other providers you may need to set the appropriate keys in `config/services.php` and redirect url in `OAuthController.php`.

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

## Testing

```bash
# Run unit and feature tests
vendor/bin/phpunit

# Run Dusk browser tests
php artisan dusk
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
