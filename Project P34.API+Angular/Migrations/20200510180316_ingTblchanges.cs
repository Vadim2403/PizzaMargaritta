using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class ingTblchanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblIngredients_tblPizzas_pizza_ID",
                table: "tblIngredients");

            migrationBuilder.DropIndex(
                name: "IX_tblIngredients_pizza_ID",
                table: "tblIngredients");

            migrationBuilder.DropColumn(
                name: "pizza_ID",
                table: "tblIngredients");

            migrationBuilder.AddColumn<string>(
                name: "PizzaId",
                table: "tblIngredients",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblIngredients_PizzaId",
                table: "tblIngredients",
                column: "PizzaId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblIngredients_tblPizzas_PizzaId",
                table: "tblIngredients",
                column: "PizzaId",
                principalTable: "tblPizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblIngredients_tblPizzas_PizzaId",
                table: "tblIngredients");

            migrationBuilder.DropIndex(
                name: "IX_tblIngredients_PizzaId",
                table: "tblIngredients");

            migrationBuilder.DropColumn(
                name: "PizzaId",
                table: "tblIngredients");

            migrationBuilder.AddColumn<string>(
                name: "pizza_ID",
                table: "tblIngredients",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblIngredients_pizza_ID",
                table: "tblIngredients",
                column: "pizza_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_tblIngredients_tblPizzas_pizza_ID",
                table: "tblIngredients",
                column: "pizza_ID",
                principalTable: "tblPizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
