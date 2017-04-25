Rails.application.routes.draw do
  devise_for :admins

  resources :contacts,  only: [:create]

  authenticated :admin do
      resources :contacts
  end

  root 'home#index'


end
