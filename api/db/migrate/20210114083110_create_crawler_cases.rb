class CreateCrawlerCases < ActiveRecord::Migration[6.0]
  def change
    create_table :crawler_cases do |t|
      t.string :location
      t.integer :total
      t.integer :new
      t.integer :deaths

      t.timestamps
    end
  end
end
