import React from 'react'
import {
  IconButton,
  IContextualMenuProps,
  IButtonStyles,
  Dropdown,
  IDropdownOption
} from '@fluentui/react'
import * as authService from '../lib/AuthService'

export const ZeroHeader: React.FC = () => {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'userName',
        text: 'ryo yoneyama'
      },
      {
        key: 'signOut',
        text: 'サインアウト',
        onClick: () => authService.signOut()
      }
    ],
    alignTargetEdge: true,
    directionalHintFixed: true
  }

  const iconBtnStyle: IButtonStyles = {
    rootHovered: {
      background: '#9953c0'
    },
    rootPressed: {
      background: '#9953c0'
    },
    rootExpanded: {
      background: '#9953c0'
    }
  }

  const dropdownOption: IDropdownOption[] = [
    { key: 'note1', text: 'ノート１' },
    { key: 'note2', text: 'ノート２' },
    { key: 'note3', text: 'ノート３' }
  ]

  return (
    <header className="zero-header">
      <h1>ZeroNote</h1>
      <Dropdown
        className="note-select"
        placeholder="ノートを選択"
        options={dropdownOption}
      />
      <IconButton
        className="user-icon"
        allowDisabledFocus={true}
        iconProps={{ iconName: 'Contact' }}
        menuProps={menuProps}
        styles={iconBtnStyle}
      />
    </header>
  )
}
