import React from 'react';
import './Contacts.css';

import contacts from '../contacts.json';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    };
  }

  sort = () => {
    const list = [...this.state.contacts];
    list.sort((firstItem, secondItem) => {
      return firstItem.name > secondItem.name ? 1 : -1;
    });
    this.setState({
      contacts: list,
    });
  };

  sortReversed = () => {
    const list = [...this.state.contacts];
    list.sort((firstItem, secondItem) => {
      return firstItem.name > secondItem.name ? -1 : 1;
    });
    this.setState({
      contacts: list,
    });
  };

  sortByLeastPopular = () => {
    const list = [...this.state.contacts];
    list.sort((firstItem, secondItem) => {
      return firstItem.popularity > secondItem.popularity ? 1 : -1;
    });
    this.setState({
      contacts: list,
    });
  };

  sortByMostPopular = () => {
    const list = [...this.state.contacts];
    list.sort((firstItem, secondItem) => {
      return firstItem.popularity > secondItem.popularity ? -1 : 1;
    });
    this.setState({
      contacts: list,
    });
  };
  addRandomContact = () => {
    const unusedContacts = contacts.filter(
      (f) => !this.state.contacts.includes(f)
    );

    const randomItem = Math.floor(Math.random() * unusedContacts.length);
    const randomContact = unusedContacts[randomItem];
    const newContacts = [...this.state.contacts, randomContact];
    this.setState({
      contacts: newContacts,
    });
  };

  delete = (actorId) => {
    const list = [...this.state.contacts];

    const filter = list.filter((contact) => contact.id !== actorId);

    this.setState({
      contacts: filter,
    });
  };

  render() {
    return (
      <div className="main-container">
        <aside className="buttons">
          <button onClick={this.sort}>Sort alphabetically</button>
          <button onClick={this.sortReversed}>
            Sort reverse-alphabetically
          </button>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByMostPopular}>Sort by most popular</button>
          <button onClick={this.sortByLeastPopular}>
            Sort by least popular
          </button>
        </aside>
        <div className="results-container">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody id="contacts-list">
              {this.state.contacts.map((person, index) => {
                return (
                  <tr key={person.id}>
                    <td>
                      <img src={person.pictureUrl} alt="" />
                    </td>
                    <td>{person.name}</td>
                    <td>{person.popularity}</td>
                    <td>
                      <button onClick={() => this.delete(person.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contacts;
