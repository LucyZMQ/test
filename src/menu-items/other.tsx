// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ChromeOutlined, QuestionOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

import { BiHomeAlt } from 'react-icons/bi';
import { BiWallet } from 'react-icons/bi';
import { LuSearch } from 'react-icons/lu';
import { BiTransfer } from 'react-icons/bi';
import { MdOutlineAccessTime } from 'react-icons/md';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
  BiHomeAlt,
  BiWallet,
  LuSearch,
  BiTransfer,
  MdOutlineAccessTime
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'other',
  title: <FormattedMessage id="others" />,
  type: 'group',
  children: [
    {
      id: 'home-page',
      title: <FormattedMessage id="home" />,
      type: 'item',
      url: '/home-page',
      icon: icons.BiHomeAlt
    },
    {
      id: 'investment-page',
      title: <FormattedMessage id="investment" />,
      type: 'item',
      url: '/investment-page',
      icon: icons.BiWallet
    },
    {
      id: 'explore-page',
      title: <FormattedMessage id="explore" />,
      type: 'item',
      url: '/explore-page',
      icon: icons.LuSearch
    },
    {
      id: 'transfer-page',
      title: <FormattedMessage id="transfer-account" />,
      type: 'item',
      url: '/transfer-page',
      icon: icons.BiTransfer
    },
    {
      id: 'transaction-page',
      title: <FormattedMessage id="transaction" />,
      type: 'item',
      url: '/transaction-page',
      icon: icons.MdOutlineAccessTime
    }
    // {
    //   id: 'documentation',
    //   title: <FormattedMessage id="documentation" />,
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true,
    //   chip: {
    //     label: 'gitbook',
    //     color: 'secondary',
    //     size: 'small'
    //   }
    // },
    // {
    //   id: 'roadmap',
    //   title: <FormattedMessage id="roadmap" />,
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/roadmap',
    //   icon: icons.DeploymentUnitOutlined,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
