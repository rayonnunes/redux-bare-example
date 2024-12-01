import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCategory, castVote } from "../../../store/voting/actions";
import {
  selectCurrentUser,
  selectcanUserVote,
} from "../../../store/voting/selectors";
import { Category } from "../../../store/voting/types";


const VotingItems: React.FC<{ category: Category }> = ({ category }) => {
    const [newItem, setNewItem] = useState("");
    const [error, setError] = useState("");
  
    const currentUser = useSelector(selectCurrentUser);
    const canUserVote = useSelector(selectcanUserVote)
  
    const dispatch = useDispatch();
  
    const handleAddItem = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (newItem.trim()) {
        dispatch(addItemToCategory(category.id, newItem));
        setNewItem("");
      }
    };
  
    const handleVote = (itemId: string) => {
      try {
        console.log(
          "category.id, itemId, currentUser.id",
          category.id,
          itemId,
          currentUser?.id
        );
        dispatch(castVote(category.id, itemId, currentUser?.id ?? ''));
        setError("");
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      console.log(`Voting for item ${itemId} in category ${category.id}`);
    };
  
    return (
      <div className="voting-items">
        <h3>{category.name}</h3>
        <div className="add-item">
          <form onSubmit={handleAddItem}>
            <input
              type="text"
              placeholder="New Item Name"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add Item</button>
          </form>
        </div>
        <div className="items-list">
          {category.items.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>{item.name}</span>
              <span>Votes: {item.votes}</span>
              <button disabled={!canUserVote} onClick={() => handleVote(item.id)}>Vote</button>
              {error}
            </div>
          ))}
        </div>
        <span>---------------------------------------------</span>
      </div>
    );
  };

  export default VotingItems