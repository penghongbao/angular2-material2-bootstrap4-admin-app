// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  amapApi: 'http://webapi.amap.com/maps?v=1.3&key=5ca4be36897408ccfacadf90df1c5f91',
  navigationApi: '/assets/data/navigation',
  todoApi: '/assets/data/todo/list.json',
  mailApi: '/assets/data/mail/list.json',
  chatsApi: '/assets/data/chats/list.json'
};
