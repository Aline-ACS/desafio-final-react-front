import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

export const menu = [
  {
    name: 'Cadastrar notas',
    link: '/',
    icon: HomeRoundedIcon,
  },
  {
    name: 'Atualizar dados',
    link: '/userupdate',
    icon: AccountBoxRoundedIcon,
  },
  {
    name: 'Notas cadastradas',
    link: '/cards',
    icon: FormatListBulletedRoundedIcon,
  },
];
