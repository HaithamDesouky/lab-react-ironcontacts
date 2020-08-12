import React from 'react';
import './Contacts.css';

import contacts from '../contacts.json';

// const generateName = () =>
//   [...new Array(8)]
//     .fill(null)
//     .map(() => 'ABCDEFGHI'[Math.floor(Math.random() * 9)])
//     .join('');

// const generatePhoneNumber = () =>
//   Math.floor(Math.random() * 10 ** 10).toString();
const limited = contacts.slice(0, 5);

// const randomContact = () => {
//   let contactsCopy = [...contacts];
//   const randomContact =
//     contactsCopy[Math.ceil(Math.random() * contactsCopy.length - 1)];

//
// };

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: limited,
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
    //get a random item

    //     if (!limited.includes(randomContact)) {
    // //     limited.push(randomContact);
    //   }
    const randomItem = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomItem];
    const oldContacts = [...this.state.contacts];
    const newContacts = [...this.state.contacts, randomContact];
    this.setState({
      contacts: oldContacts.includes(randomContact) ? oldContacts : newContacts,
    });
  };

  delete = (actorId) => {
    const list = [...this.state.contacts];
    console.log(actorId);
    const filter = list.filter((contact) => contact.id !== actorId);
    console.log(filter);

    this.setState({
      contacts: filter,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.sort}>Sort alphabetically</button>
        <button onClick={this.sortReversed}>Sort reverse-alphabetically</button>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByMostPopular}>Sort by most popular</button>
        <button onClick={this.sortByLeastPopular}>Sort by least popular</button>

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
