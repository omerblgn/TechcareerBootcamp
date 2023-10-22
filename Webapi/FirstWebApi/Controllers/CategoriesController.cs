using System.ComponentModel.DataAnnotations;
using System.Net;
using FirstWebApi.Data;
using FirstWebApi.Models;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private IValidator<CategoryCreateInput> _categoryCreateInputValidator;
        public CategoriesController(IValidator<CategoryCreateInput> categoryCreateInputValidator, ApplicationDbContext context)
        {
            _categoryCreateInputValidator = categoryCreateInputValidator;
            _context = context;
        }
        static List<Category> categories = new List<Category>
        {
            new Category { Id = 1, Name = "Category 1", Description = "Description of Category 1" },
            new Category { Id = 2, Name = "Category 2", Description = "Description of Category 2" },
            new Category { Id = 3, Name = "Category 3", Description = "Description of Category 3" },
            new Category { Id = 4, Name = "Category 4", Description = "Description of Category 4" },
            new Category { Id = 5, Name = "Category 5", Description = "Description of Category 5" },
            new Category { Id = 6, Name = "Category 6", Description = "Description of Category 6" },
            new Category { Id = 7, Name = "Category 7", Description = "Description of Category 7" },
            new Category { Id = 8, Name = "Category 8", Description = "Description of Category 8" }
        };

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            // return Ok(categories);
            var _categories = _context.Categories.ToList();
            return Ok(_categories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            // var category = categories.FirstOrDefault(x => x.Id == id);

            // if (category == null)
            // {
            //     return NotFound();
            // }

            // return Ok(categories[0]);

            var category = await _context.Categories.FindAsync(id);
            return category == null ? NotFound() : Ok(category);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CategoryCreateInput model)
        {
            var result = await _categoryCreateInputValidator.ValidateAsync(model);

            if (!result.IsValid)
            {
                return Ok(result.Errors);
            }

            // if (ModelState.IsValid)
            // {
            //     var category = new Category
            //     {
            //         Id = categories.Count + 1,
            //         Name = model.Name,
            //         Description = model.Description
            //     };

            //     categories.Add(category);
            //     return Ok(category);
            // }
            // return Ok(HttpStatusCode.BadRequest);


            // 1. Yol
            // var category = new Category();
            // category.Name = model.Name;
            // category.Description = model.Description;

            // Category category=new();
            // category.Name = model.Name;
            // category.Description = model.Description;

            var category = new Category()
            {
                Name = model.Name,
                Description = model.Description
            };

            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();

            return Ok(category);
        }

        [HttpPut]
        public async Task<IActionResult> Put(CategoryEditInput model)
        {
            // var currentCategory = categories.FirstOrDefault(x => x.Id == category.Id);
            // if (currentCategory == null)
            // {
            //     return Ok(HttpStatusCode.NotFound);
            // }

            // // categories.Remove(currentCategory);
            // currentCategory.Name = category.Name;
            // currentCategory.Description = category.Description;
            // // categories.Add(currentCategory);

            // return Ok(currentCategory);

            var category = await _context.Categories.FindAsync(model.Id);
            if (category == null)
            {
                return Ok(HttpStatusCode.NotFound);
            }

            category.Name = model.Name;
            category.Description = model.Description;

            _context.Categories.Update(category);
            bool result = await _context.SaveChangesAsync() > 0;

            return result ? Ok(category) : Ok(HttpStatusCode.BadRequest);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            // var category = categories.FirstOrDefault(x => x.Id == id);

            // if (category != null)
            // {
            //     categories.Remove(category);
            //     return Ok(HttpStatusCode.OK);
            // }

            // return Ok(HttpStatusCode.NotFound);

            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return Ok(HttpStatusCode.NotFound);
            }

            _context.Categories.Remove(category);
            bool result = await _context.SaveChangesAsync() > 0;
            return result ? Ok(category) : Ok(HttpStatusCode.BadRequest);
        }
    }
}